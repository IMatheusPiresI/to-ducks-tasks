import { InputHTMLAttributes } from 'react'
import duckCamera from '/duckCamera.svg'
import * as S from './styles'

type FormInputFile = InputHTMLAttributes<HTMLInputElement> & {
  id: string
  setFile: (file: string) => void
  file: string
}

const FormInputFile = ({ id, setFile, file }: FormInputFile) => {
  const handleSetFile = (event: any) => {
    const reader = new FileReader()

    reader.onload = (event) => {
      setFile(String(event.target!.result))
    }

    let url = String(reader.readAsDataURL(event.target.files[0]))
    setFile(url)
    event.target.value = []
  }

  return (
    <S.ContainerFile>
      <S.BoxFile file={file ? 'photo' : 'camera'}>
        <img src={file ? file : duckCamera} alt='Photo Duck' />
        <label htmlFor={id}>
          <input type='file' id={id} name={id} onChange={handleSetFile} data-testid='file' />
        </label>
      </S.BoxFile>
      <p>Duck Photo</p>
    </S.ContainerFile>
  )
}

export default FormInputFile
