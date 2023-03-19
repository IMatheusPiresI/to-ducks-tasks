import React from 'react'

import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'

import { store } from '../../src/store/store'

export const renderProvider = (children: ReactNode) => {
  render(<Provider store={store}>{children}</Provider>)
}
