import { InputHTMLAttributes } from 'react'
import * as S from './styles'
import search from '/search.svg'

const SearchInput = ({ ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <S.Container>
      <S.InputSearch type='text' placeholder='Search for duck task' {...rest} />
      <S.ImageSearch src={search} alt='Search' />
    </S.Container>
  )
}

export default SearchInput
