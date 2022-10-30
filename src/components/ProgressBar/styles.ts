import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  display: flex;
  margin: 40px 0;
  user-select: none;
`;

export const StepContainer = styled.div`
	text-align: center;
	width: 100%;
	position: relative;

	p {
		font-weight: 500;
		font-size: 18px;
		color: #000;
		margin-bottom: 8px;
	}

	.bullet{
		height: 25px;
		width: 25px;
		border: 2px solid #000;
		display: inline-block;
		border-radius: 50%;
		position: relative;
		transition: 0.2s;
		font-weight: 500;
		font-size: 17px;
		line-height: 25px;
	}

	.bullet.active{
		border-color: #d43f8d;
		background: #d43f8d;
	}

	.bullet span{
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}

	.bullet.active span{
		display: none;
	}

	.bullet:before,
	.bullet:after{
		position: absolute;
		content: '';
		bottom: 0.688rem;
		right: -3.188rem;
		height: 0.188rem;
		width: 2.75rem;
		background: #262626;
	}

	.bullet.active:after{
		background: #d43f8d;
		transform: scaleX(0);
		transform-origin: left;
		animation: animate 0.3s linear forwards;
	}

	@keyframes animate {
		100%{
			transform: scaleX(1);
		}
	}

	:last-child .bullet:before,
	:last-child .bullet:after{
		display: none;
		background-color: red;
	}

	p.active{
		color: #d43f8d;
		transition: 0.2s linear;
	}

	.check{
		position: absolute;
		left: 50%;
		top: 70%;
		font-size: 15px;
		transform: translate(-50%, -50%);
		display: none;
	}

	.check.active{
		display: block;
		color: #fff;
	}
`;