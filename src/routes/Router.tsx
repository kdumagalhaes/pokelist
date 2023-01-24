import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Home } from '../pages/Home'
import { PokeDetailPage } from '../pages/PokeDetailPage/PokeDetailPage'
import { PokeFavorites } from '../pages/PokeFavorites/PokeFavorites'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<PokeFavorites />} />
        <Route path="/pokemon/:name" element={<PokeDetailPage />} />
      </Route>
    </Routes>
  )
}
