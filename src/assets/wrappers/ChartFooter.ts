import styled from "styled-components";

const ChartWrapper = styled.section`
  max-width: 926px;
  border: 1px solid #e2e2e2;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  padding: 21px 0;
  margin-top: 1.0625rem;

  .chart-option-wrapper {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    margin-left: 3.5rem;
    margin-bottom: 3.625rem;
  }

  .chart-option {
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.1875rem;
    transition: 0.3s all linear;
    padding-bottom: 5px;
    border: none;
    background: transparent;
    position: relative;
    height: 30px;
  }
  .chart-option.active {
    font-weight: 700;
  }
  .chart-option.active::after {
    content: "";
    bottom: 0;
    left: 0;
    position: absolute;
    height: 2px;
    width: 100%;
    background: var(--primary-back);
  }
`;

export default ChartWrapper;
