import avatar1 from '../../assets/images/avatar-1.png'
import avatar2 from '../../assets/images/avatar-2.png'
import avatar3 from '../../assets/images/avatar-3.png'
import avatar4 from '../../assets/images/avatar-4.png'
import avatar5 from '../../assets/images/avatar-5.png'
import avatar6 from '../../assets/images/avatar-6.png'
import avatar7 from '../../assets/images/avatar-7.png'

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7]

const tones = {
  lime: 'bg-secondary-400 text-neutral-950',
  dark: 'bg-neutral-950 text-white',
}

export default function AvatarStack({
  count = '2K+',
  size = 43,
  overlap = 17,
  max = avatars.length,
  tone = 'lime'
}) {
  return (
    <div className="flex items-center">
      {avatars.slice(0, max).map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          width={size}
          height={size}
          style={{ width: size, height: size, marginLeft: i === 0 ? 0 : -overlap }}
          className="rounded-full ring-2 ring-white"
        />
      ))}
      <span
        style={{ width: size, height: size, marginLeft: -overlap }}
        className={`z-10 flex items-center justify-center rounded-full ${tones[tone]} font-medium ring-2 ring-white ${
          size < 40 ? 'text-label-xs' : 'text-label-s'
        }`}
      >
        {count}
      </span>
    </div>
  )
}