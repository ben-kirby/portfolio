import React from 'react';
import styled from 'styled-components';
import SkyBg from './animatedBg';

const styles = {
	content: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 100%;
    height: 700px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  `,
	heroText: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
	header: styled.p`
    color: #EDE1E1;
    text-shadow: 0px 0px 150px black;
    font-family: Over the Rainbow;
    font-size: 150px;
    font-weight: bolder;
    margin: 0px;
  `,
	subHeader: styled.p`
    color: #EDE1E1;
    text-shadow: 0px 0px 150px black;
    font-family: Over the Rainbow;
    font-size: 35px;
  `,
};

function HeroImage() {
	return (
		<styles.content>
			<SkyBg/>
			<styles.heroText>
				<styles.header>Ben Kirby</styles.header>
				<styles.subHeader>web developer</styles.subHeader>
			</styles.heroText>
		</styles.content>
	);
}

export default HeroImage;
