import styles from './Avatar.module.css'
import { ImgHTMLAttributes } from 'react'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean
}

const Avatar = ({ hasBorder = true, ...props }: AvatarProps) => {
  return (
    <div>
        <img 
            className={hasBorder ? styles.avatarWhitBorder: styles.avatar} 
            {...props}
        />
    </div>
  )
}

export default Avatar