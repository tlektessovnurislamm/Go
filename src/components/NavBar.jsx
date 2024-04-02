import React from 'react'
import { Heart , User ,Search ,MessageCircle} from 'react-feather';

export default function NavBar() {
  return (
    <div  className="NavBar">
      <div>
        <Search />
        <p>Поиск</p>
      </div>
      <div>
        <Heart />
        <p>Избранное</p>
      </div>
      <div>
        <MessageCircle />
        <p>Сообщения</p>
      </div>
      <div>
        <User />
        <p>Профиль</p>
      </div>
    </div>
  )
}
