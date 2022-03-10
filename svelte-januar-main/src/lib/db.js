import {createClient} from '@supabase/supabase-js'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

export {supabase}

export default supabase

export const pages = [
  {
    "header": "Nwp-Studio",
    "sub": "Startseite",
    "op1": true,
    "name": "Start",
    "path": "/",
    "icon": "home",
    "navi": [
      {
        "name": "Timer",
        "path": "/timer",
        "icon": "server"
      },
      {
        "name": "User",
        "path": "/user",
        "icon": "user"
      }
    ],
    "slider": [
      {
        "titel": "Home",
        "file": "https://nwp-cgn.de/studio/upload/kat12/server/php/files/bgggA13.png",
        "img_host": "https://nwp-cgn.de/img"
      }
    ]
  },
  {
    "header": "Nwp-Studio",
    "sub": "Timer",
    "op1": true,
    "name": "Timer",
    "path": "/timer",
    "icon": "server",
    "navi": [
      {
        "name": "Start",
        "path": "/",
        "icon": "home"
      },
      {
        "name": "User",
        "path": "/user",
        "icon": "user"
      }
    ],
    "slider": [
      {
        "titel": "Timer",
        "file": "https://nwp-cgn.de/studio/upload/kat12/server/php/files/bgggA16.png",
        "img_host": "https://nwp-cgn.de/img"
      }
    ]
  },
  {
    "header": "Nwp-Studio",
    "sub": "User Profil",
    "op1": true,
    "name": "User",
    "path": "/user",
    "icon": "user",
    "navi": [
      {
        "name": "Start",
        "path": "/",
        "icon": "home"
      },
      {
        "name": "Timer",
        "path": "/timer",
        "icon": "server"
      }
    ],
    "slider": [
      {
        "titel": "Timer",
        "file": "https://nwp-cgn.de/studio/upload/kat12/server/php/files/bgggA14.png",
        "img_host": "https://nwp-cgn.de/img"
      }
    ]
  }
];
