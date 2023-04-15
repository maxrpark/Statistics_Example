import styled from "styled-components";

const StatCardWrapper = styled.div`
  width: 222px;
  .card-title {
    text-align: center;
    padding: 0.5rem;
    background: var(--gray-2);

    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: var(--gray-3);
  }
  .card-main {
    padding: 37px 33px 21px 33px;
    text-align: center;
  }
  .card-center {
    margin-bottom: 36px;
  }
  .card-center p:first-child {
    font-size: 12px;
    line-height: 15px;
  }
  .card-center p:last-child {
    font-size: 38px;
    line-height: 46px;
    font-weight: 700;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
  }
  .card-details p:first-child {
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */

    color: var(--gray-4);
  }
  .card-details p:last-child {
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: var(--gray-5);
    margin-top: 3px;
  }
`;

export default StatCardWrapper;
