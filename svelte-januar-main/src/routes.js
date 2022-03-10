import { wrap } from 'svelte-spa-router/wrap';
import { supabase } from './lib/db';
// @index(['./routes/*.svelte', './routes/user/*.svelte', './routes/static/*.svelte'], (f, _, e) => ` import ${_.pascalCase(f.name)} from '${f.path}${f.ext}';`)
 import Home from './routes/Home.svelte';
 import Loading from './routes/Loading.svelte';
 import NotFound from './routes/NotFound.svelte';
// @endindex

const checkAuth = () => {
  if (supabase.auth.user()) {
    return true
  } else {
    return false
  }
};


let aD =  [
  {
    "header": "Nwp-Studio",
    "sub": "Startseite",
    "op1": true,
    "name": "Start",
    "path": "/",
    "icon": "home",
    "navi": [],
    "slider": [
      {
        "titel": "Home",
        "file": "https://nwp-cgn.de/studio/upload/kat31/server/php/files/bb_ca003.jpg",
        "img_host": "https://nwp-cgn.de/img"
      }
    ]
  },
  '/user': wrap({
    asyncComponent: () => import('./routes/Wild.svelte')
      .then((component) => {
        return new Promise((resolve) => {
          setTimeout(() => resolve(component), 2000)
        })
      }),
      props: {
        pD: aD[4]
      },
    loadingComponent: Loading,
    loadingParams: {
      message: 'Loading the Wild route…'
    }
  }),
  '*': NotFound,
}

/* export const routes = {
  '/': wrap({
    component: Home,
    props: {
      pD: aD[0]
    }
  }),
  '/hsp/ser': wrap({
    component: Hsp,
    props: {
      pD: aD[1],
      view: 1
    },
    conditions: () => [checkAuth()]
  }),
  '/hsp/eps': wrap({
    component: Hsp,
    props: {
      pD: aD[2],
      view: 2
    },
    conditions: () => [checkAuth()]
  }),
  '/hsp/ser/:idi': wrap({
    component: Filter,
    props: {
      pD: aD[2]
    }
  }),
  '/hsp/det/:id': wrap({
    component: Details,
    props: {
      pD: aD[3]
    }
  }),
  '/user': wrap({
    asyncComponent: () => import('./routes/Wild.svelte')
      .then((component) => {
        return new Promise((resolve) => {
          setTimeout(() => resolve(component), 2000)
        })
      }),
      props: {
        pD: aD[4]
      },
    loadingComponent: Loading,
    loadingParams: {
      message: 'Loading the Wild route…'
    }
  }),
  '*': NotFound,
} */