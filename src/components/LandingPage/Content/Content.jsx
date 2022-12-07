import React from 'react'
import Box from '../Box/Box'

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import first from '../../../assets/svgs/1.svg'
import second from '../../../assets/svgs/2.svg'

import './Content.scss'
const Content = () => {
    const reasons = [
        {
            id: 1,
            src: 'https://eep.io/images/yzco4xsimv0y/1zWDKFXdQBZGeColFCtHgf/aa379dc2696f582b48f0e399c8a5f871/support1_b_w.png?w=160&fm=webp&q=80',
            content: '1000+ Communities'
        },
        {
            id: 2,
            src: 'https://eep.io/images/yzco4xsimv0y/2OBlZ0Aun44giirtdr6Fx4/e592f63930574780f28fb792318c5899/thumbsup_b_w.png?w=160&fm=webp&q=80',
            content: 'Great Community support'
        },
        {
            id: 3,
            src: 'https://eep.io/images/yzco4xsimv0y/5ZD6ImzMGdQbhR59NIQB7a/b1dbe083df8adfceab2c75a1d66066e4/trustedpros_b_w.png?w=160&fm=webp&q=80',
            content: 'Directory of trusted pros'
        },
    ]
    return (
        <div className='Landingcontent'>
            <div className='contentBox'>
                {/* <Box width={'65%'} height={'50%'} borderRadius={'10px'} color={'red'} className='grid-col-span-2'></Box> */}
                <div style={{ width: '100%', height: '100%', backgroundColor: '#fcfcfa', borderRadius: '20px' }} className='grid-col-span-2 textDiv'>
                    <div className='main'>
                        <p>
                            LOOK<br /> BEYOND<br /> LIMITS
                        </p>
                        <div className='loginAndEmail'>
                            <button className='loginButton'>Login Now</button>
                            <div className='emailIcon'><EmailOutlinedIcon /></div>

                        </div>
                    </div>
                    <div className='mainImage'>
                        <img src="https://i.pinimg.com/564x/66/4b/cd/664bcd47100b1c37364d4e6110306386.jpg" alt="" />
                    </div>

                </div>
                <div className='secMainBox'>
                    <Box width={'100%%'} height={'100%'} borderRadius={'20px'} color={'#f3f3f5'} >
                        <div className='secndBox'>
                            <img src={second} alt="" className='fSvg' />
                        </div>
                    </Box>
                </div>
                <div className="thirdMainBox">
                    <Box width={'100%%'} height={'100%'} borderRadius={'20px'} color={'#f3f3f5'}>
                        <div className="thirdBox">
                            <div className="quoteBox">
                                <p>Here in <b>NovaLand</b><br />you can find and connect with people<br /> who have the power to open <br />the doors for you</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" /></svg>
                            </div>
                            <div className="author">
                                <p className='authorName'>Rishad Paduvil</p>
                                <p className='designation'>Founder and CEO, NovaLand</p>
                            </div>
                        </div>
                    </Box>
                </div>


                <div className="fourthMainBox">
                    <Box width={'100%%'} height={'100%'} borderRadius={'20px'} color={'#f3f3f5'}>
                        <div className='fourthBox'>
                            <div className="why">
                                <p style={{ fontSize: 'x-large', fontWeight: '900', marginTop: '3rem' }}>Why NovaLand?</p>
                                <p >We're built for growing network.<br /> Put our marketing and tools behind your idea,dream,passion or business and we'll help you share  it with the world</p>
                            </div>
                            <div className="reasons">
                                {
                                    reasons.map((i, index) => {
                                        return <div className='singleReason' key={i.id}>
                                            <div className='reasImg'>
                                                <img src={i.src} alt="" />
                                            </div>
                                            <p>{i.content}</p>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </Box>
                </div>

                <div className='fifthMainBox'>
                    <Box width={'100%'} height={'100%'} borderRadius={'20px'} color={'#f3f3f5'}>
                        <div className='fifthBox'>
                            <div className='missionContent'>
                                <div className='mission'>
                                    <p>Our mission</p>
                                </div>
                                <div className='missionDesc'>
                                    <p>We gethered around thousand of communities <br /> and users. So through this anyone can find <br /> people with same intrests and passion.Also it can provide help or charity to people <br /> who are suffering.. <br /> Apart from other social media platforms <br /> you are not wandering around here for nothing,<br /> You can grow when you are inside NovaLand.</p>
                                </div>
                            </div>
                        </div>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Content