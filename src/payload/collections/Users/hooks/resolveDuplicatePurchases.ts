/* eslint-disable prettier/prettier */
import type { FieldHook } from 'payload/types'

import type { User } from '../../../payload-types'

export const resolveDuplicatePurchases: FieldHook<User> = async ({ value, operation }) => {
  if ((operation === 'create' || operation === 'update') && value) {
    return Array.from(
      new Set(
        // eslint-disable-next-line prettier/prettier
        value?.map(purchase => (typeof purchase === 'object' ? purchase.id : purchase)) || [],
      ),
    )
  }

  return
}
