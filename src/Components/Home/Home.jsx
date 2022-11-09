import { useAuth0 } from '@auth0/auth0-react'
import './Home.css'

export default function Home() {
	const { loginWithRedirect } = useAuth0()

	return (
		<div className='Home'>
			<nav>
				<div className='Items'>
					<div className='Logo'>Leano AI</div>
					<div>
						{/* <div className='SupportNav'>Support</div> */}
						{/* <div className='PricingNav'>Pricing</div> */}
						<div className='SignIn' onClick={() => loginWithRedirect({ screen_hint: 'signin' })}>
							Sign In
						</div>
						<div className='SignUp' onClick={() => loginWithRedirect({ screen_hint: 'signup' })}>
							<div className='Button'>Try the Beta (Free)</div>
						</div>
					</div>
				</div>
			</nav>
			<section className='Section1'>
				<div>
					<div className='Title'>
						<div>
							Let <span className='Gradient'>A.I.</span>
						</div>
						<div>Cut Podcasts and Interviews</div>
						<div>
							into <span className='Gradient'>Clips, Shorts, and Reels</span>
						</div>
						<div>for You</div>
					</div>
					<div className='SubTitle'>{`Upload your raw audio or video,\nthen download dozens of clips.`}</div>
					<div className='TryBeta' onClick={() => loginWithRedirect({ screen_hint: 'signup' })}>
						<span>Try the Beta for Free</span>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
							<path d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z' />
						</svg>
					</div>
				</div>
			</section>
			<section className='Section2'>
				<img src='/MacbookPro16.svg' />
			</section>
			<section className='Section3'>
				<div className='Copy'>
					<div className='Headline'>{`Save Hundreds of\nHours on Editing.`}</div>
					<div className='Description'>
						Get clips in one click. No more manual splicing and cutting. No more listening to entire recordings. Let AI
						transcribe your audio and isolate complete thoughts. Skim the transcript of dozens of clips and download the
						best ones.
					</div>
				</div>
				<img className='ClipImg' src='/Clip4.png' />
			</section>
			<section className='Section4'>
				<div className='Copy'>
					<div className='Headline'>{`Increase Monetization\nwith SEO Scoring.`}</div>
					<div className='Description'>
						See which clips feature trending topics. Search Engine Optimization (SEO) scores are calculated for each
						clip. SEO scores reflect the search volume within the last 24 hours.
					</div>
				</div>
				<img className='SEOImg' src='/SEO.png' />
			</section>
			<section className='Section5'>
				<div className='Copy'>
					<div className='Headline'>{`Grow Your Audience. Across Platforms.`}</div>
					<div className='Description'>
						Different platforms promote different video lengths. YouTube prefers 10 minutes; TikTok prefers 30 seconds.
						Download optimal clips for different platform algorithms.
					</div>
				</div>
			</section>
			{/* <section className='Section6'>How it works</section>
			<section className='Section7'>Pricing</section>
			<section className='Section8'>Try the Beta for Free</section>
			<footer>Footer</footer> */}
		</div>
	)
}
