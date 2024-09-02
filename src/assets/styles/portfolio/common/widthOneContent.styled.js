import styled from 'styled-components';

export const WidthOneContent = styled.div`
  position: relative;
  text-align: center;

  @media (min-width: 1025px) {
    /* margin: 0 50px; */
    width: 80%;
    margin: 0 auto;
    img {
      width: 100%;
      margin-bottom: 60px;
    }
    padding-top: ${(props) => {
      if (props.$first) return '160px';
      return '0px';
    }};
    padding-bottom: ${(props) => {
      if (props.$last) return '200px';
      if (props.$customPaddingBottom) return '190px';
      return '160px';
    }};

    .left {
      position: absolute;
      left: 0;
      bottom: 510px;
    }
    .right {
      position: absolute;
      right: 0;
      top: -209px;
    }
  }

  @media (max-width: 1024px) {
    margin: 0 var(--mobile-margin);
    img {
      width: 100%;
      /* margin-bottom: 24px; */
      margin-bottom: 6.4vw;
    }

    padding-top: ${(props) => {
      // if (props.$first) return '80px';
      if (props.$first) return '21.33vw';
      return '0px';
    }};
    padding-bottom: ${(props) => {
      // if (props.$last) return '142px';
      if (props.$last) return '37.87vw';
      // if (props.$customPaddingBottom) return '?px';
      // return '80px';
      return '21.33vw';
    }};
  }

  &.firstChild {
    padding-top: 160px;
  }
`;
