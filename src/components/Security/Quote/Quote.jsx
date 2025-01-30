import { useState, useEffect, useRef } from 'react'
import './Quote.css'
import quoteStar from '../../../assets/stare-animation-end.png'
import Sam from '../../../assets/Sam.png'
import leftQuote from '../../../assets/leftQuote.png'

export function Quote() {
	const quotes = [
		{
			id: 1,
			text: 'In 2025, it appears the technology landscape is constantly evolving...',
			author: 'Sam Goddard CISSP, CISM',
			position:
				'Regional Information Security Officer Fortune 500 Insurance Organization',
			picture: Sam,
		},
		{
			id: 2,
			text: 'Findevor is taking an intentionally proactive and holistic approach...',
			author: 'Vijay Kumar',
			position: 'CTO of Tech Innovations',
			picture: Sam,
		},
		{
			id: 3,
			text: 'Building trust through effective product security and risk management...',
			author: 'Rob Brewer',
			position: 'Cybersecurity Expert',
			picture: Sam,
		},
	]

	return (
		<div className='quotes-scroll'>
			<div className='quotes'>
				<div className='quote-container'>
					<div className='securQuote-wrapcont'>
						<div className='securQuote-star-top'>
							<img
								src={quoteStar}
								alt='quote-star'
								className='quote-starImgLeft'
							/>
						</div>
						{quotes.map((quote, index) => (
							<div key={quote.id} className='securQuote'>
								<div className='quote-wrapper-container'>
									<div className='quote-wrapper-top'>
										<img
											className='quote-wrapper-leftImg'
											src={leftQuote}
											alt='leftQuote'
										/>
										<div className='securQuote-wrapper-text'>{quote.text}</div>
									</div>
									<div className='quote-wrapper-bottom'>
										<div className='securQuotePicture'>
											<img
												src={quote.picture}
												alt={quote.author}
												className='securQuotePictureImg'
											/>
										</div>
										<div className='wrapper-bottom-right'>
											<div className='wrapper-bottom-name'>{quote.author}</div>
											<div className='wrapper-bottom-position'>
												{quote.position}
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
						<div className='securQuote-star-bottom'>
							<img
								src={quoteStar}
								alt='quote-star'
								className='quote-starImgRight'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
