import { TextareaHTMLAttributes } from 'react'
import * as S from './styles'

const DescTask = ({ ...rest }: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return <S.Textarea {...rest}></S.Textarea>
}

export default DescTask
