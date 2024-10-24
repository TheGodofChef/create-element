export default function () {
	if (PROD) {
		const logo = `
__________________________________________________________________________________________________
                            __                          __                                 __   
  .----..----..-----..---.-.|  |_ .-----. ______ .-----.|  |.-----..--------..-----..-----.|  |_ 
  |  __||   _||  -__||  _  ||   _||  -__||______||  -__||  ||  -__||        ||  -__||     ||   _|
  |____||__|  |_____||___._||____||_____|        |_____||__||_____||__|__|__||_____||__|__||____|
                                                                                               
__________________________________________________________________________________________________
                                author:Heavenyang
`

		const rainbowGradient = `
background: linear-gradient(135deg, orange 60%, cyan);
background-clip: text;
color: transparent;
font-size: 16px; 
line-height: 1;
font-family: monospace;
font-weight: 600;
`

		console.info(`%c${logo}`, rainbowGradient)
	} else if (DEV) {
		console.log('[Create-Element]:dev mode...')
	}
}
