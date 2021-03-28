import styled from "styled-components";

export const TopBar = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  text-align: center;
  z-index: 99;
  color: #fff;
  padding: 10px 0;
  font-size: 14px;
`;

export const NavBarContainerWrap = styled.div`
  background: #fff;
  border-bottom: 1px solid #ebebeb;
  z-index: 10;
  position: sticky;
  top: 0;
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  margin: 0 auto;
  padding: 0.9% 0;
  & > * {
  }

  img {
    width: 75px;
    height: 75px;
    cursor: pointer;
  }
`;

export const NavbarIconsContainer = styled.div`
  img {
    width: 22px;
    height: 23px;
    margin-left: 25px;
    cursor: pointer;
  }
`;

export const NavItemsContainer = styled.div`
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 350px;
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  p {
    cursor: pointer;
    &::after {
      content: "";
      display: block;
      margin: 0 auto;
      margin-top: 15px;
      width: 0;
      height: 2.2px;
      background: ${({ theme }) => theme.colors.primary};
      transition: width 0.3s;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;
