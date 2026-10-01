import avatar1 from '../../assets/images/avatar-1.png'
import avatar2 from '../../assets/images/avatar-2.png'
import avatar3 from '../../assets/images/avatar-3.png'
import avatar4 from '../../assets/images/avatar-4.png'
import avatar5 from '../../assets/images/avatar-5.png'
import avatar6 from '../../assets/images/avatar-6.png'
import avatar7 from '../../assets/images/avatar-7.png'

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7]

export default function AvatarStack({ count = '2K+' }) {
  return (
    <div className="flex items-center">
      {avatars.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          width={43}
          height={43}
          className={`size-10.75 rounded-full ring-2 ring-white ${i === 0 ? '' : '-ml-4.25'}`}
        />
      ))}
      <span className="z-10 -ml-4.25 flex size-10.75 items-center justify-center rounded-full bg-secondary-400 text-label-s font-medium text-neutral-950 ring-2 ring-white">
        {count}
      </span>
    </div>
  )
}