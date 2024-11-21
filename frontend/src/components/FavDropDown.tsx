import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function FavDropDown() {
  return (
    <div>
      <HoverCard>
        <HoverCardTrigger>
          <img src='./public/fav.png' alt='fav' className='h-6 w-6'></img>
        </HoverCardTrigger>
        <HoverCardContent>
          The React Framework – created and maintained by @vercel.
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
