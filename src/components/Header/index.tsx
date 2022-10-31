import { Scroll, Timer } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

import { HeaderContainer } from './styles';

import logoIgnite from '../../assets/logo-ignite.svg';

export function Header() {
  const iconsSize = 24;

  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="Logo ignite: Dois triângulos verdes" />

      <nav>
        <NavLink end title="Timer" to="/"><Timer size={iconsSize} /></NavLink>
        <NavLink end title="Histórico" to="/history"><Scroll size={iconsSize} /></NavLink>
      </nav>
    </HeaderContainer>
  );
}