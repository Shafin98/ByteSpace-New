import AvatarStack from '../ui/AvatarStack'
import starIcon from '../../assets/images/icon-star.png'

function LevelIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden="true">
      <rect x="2" y="9" width="3" height="5" rx="1" />
      <rect x="6.5" y="6" width="3" height="8" rx="1" />
      <rect x="11" y="3" width="3" height="11" rx="1" />
    </svg>
  )
}

export default function CourseCard({ course }) {
  const { title, author, price, period, rating, level, image, imageAlt, students } = course

  return (
    <article className="w-full max-w-93.25 rounded-2xl border border-neutral-100 bg-white p-4 md:max-w-none">
      {/* The thumbnail PNGs already include the lessons / duration / comments chips */}
      <img src={image} alt={imageAlt} width={341} height={196} className="h-auto w-full" />

      <div className="mt-4 flex items-center justify-between gap-3">
        <h3 className="truncate font-heading text-body-l leading-7 font-semibold text-neutral-950">
          {title}
        </h3>
        <p className="flex shrink-0 items-center gap-1 text-body-s text-neutral-500">
          {rating}
          <img src={starIcon} alt="" width={24} height={24} className="size-5" />
        </p>
      </div>
      <p className="text-body-xs text-primary-700">by {author}</p>

      <div className="mt-4 flex items-center gap-3.5">
        <span className="inline-flex h-8 items-center gap-2 rounded-full bg-neutral-50 px-3 text-body-xs text-neutral-700">
          <LevelIcon className="size-4" />
          {level}
        </span>
        <AvatarStack size={32} overlap={14} max={5} count={students} />
      </div>

      <p className="mt-4 flex items-baseline gap-0.5">
        <span className="font-heading text-body-l font-semibold text-primary-700">${price}</span>
        <span className="text-body-xs text-neutral-400">/{period}</span>
      </p>
    </article>
  )
}