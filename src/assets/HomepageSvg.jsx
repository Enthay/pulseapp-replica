import { motion } from "framer-motion"

const svgVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {duration: 1}}
  }

  const pathVariants = {
    hidden: {opacity: 0, pathLength: 0},
    visible: {opacity: 1, pathLength: 1, transition: {duration: 2, ease: 'easeInOut'}}
  }

export const HomepageSvg = () => {
  return (
    <svg className="bar-graph" viewBox="0 0 1552 545" xmlns="http://www.w3.org/2000/svg">
         <defs>
           <linearGradient x1="50%" y1="71.0416667%" x2="50%" y2="100%" id="linearGradient-line">
             <stop stopColor="#D6DAE5" offset="0%"></stop>
             <stop stopColor="#D6DAE5" stopOpacity="0" offset="100%"></stop>
           </linearGradient>
         </defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-661.000000, -290.000000)">
            <g transform="translate(661.000000, 290.000000)">
                <g transform="translate(142.000000, 0.000000)">
                    <g  transform="translate(1191.000000, 0.000000)">
                        <polygon  fill="#00AD6A" points="0 0 36 0 36 499.828125 0 499.828125" style={{transform: "scaleY(1)"}}></polygon>
                        <polygon  fill="#F68787" points="39 83 75 83 75 500 39 500" style={{transform: "scaleY(1)"}}></polygon>
                    </g>
                    <g  transform="translate(1021.000000, 83.000000)">
                        <polygon fill="#00AD6A" points="0 0 36 0 36 416.828125 0 416.828125" style={{transform: "scaleY(1)"}}></polygon>
                        <polygon fill="#F68787" points="39 153 75 153 75 416.828125 39 416.828125" style={{transform: "scaleY(1)"}}></polygon>
                    </g>
                    <g  transform="translate(851.000000, 197.000000)">
                        <polygon  fill="#00AD6A" points="0 -1.13686838e-13 36 -1.13686838e-13 36 302.828125 0 302.828125" style={{transform: "scaleY(1)"}}></polygon>
                        <polygon  fill="#F68787" points="39 151 75 151 75 302.828125 39 302.828125" style={{transform: "scaleY(1)"}}></polygon>
                    </g>
                    <g  transform="translate(680.000000, 116.000000)">
                        <polygon  fill="#00AD6A" points="0 150 36 150 36 383.828125 0 383.828125" style={{transform: "scaleY(1)"}}></polygon>
                        <polygon  fill="#F68787" points="39 5.68434189e-14 75 5.68434189e-14 75 383.828125 39 383.828125" style={{transform: "scaleY(1)"}}></polygon>
                    </g>
                    <g  transform="translate(510.000000, 247.000000)">
                        <polygon  fill="#00AD6A" points="0 -7.10542736e-14 36 -7.10542736e-14 36 252.828125 0 252.828125" style={{transform: "scaleY(1)"}}></polygon>
                        <polygon  fill="#F68787" points="39 12 75 12 75 252.828125 39 252.828125" style={{transform: "scaleY(1)"}}></polygon>
                    </g>
                    <g  transform="translate(339.000000, 298.000000)">
                        <polygon  fill="#00AD6A" points="0 -1.42108547e-14 36 -1.42108547e-14 36 201.828125 0 201.828125" style={{transform: "scaleY(1)"}}></polygon>
                        <polygon  fill="#F68787" points="39 14 75 14 75 201.828125 39 201.828125" style={{transform: "scaleY(1)"}}></polygon>
                    </g>
                    <g  transform="translate(170.000000, 290.000000)">
                        <polygon  fill="#00AD6A" points="0 12 36 12 36 209.828125 0 209.828125" style={{transform: "scaleY(1)"}}></polygon>
                        <polygon  fill="#F68787" points="39 -2.84217094e-14 75 -2.84217094e-14 75 209.828125 39 209.828125" style={{transform: "scaleY(1)"}}></polygon>
                    </g>
                    <g  transform="translate(0.000000, 274.000000)">
                        <polygon  fill="#00AD6A" points="0 2.84217094e-14 36 2.84217094e-14 36 225.828125 0 225.828125" style={{transform: "scaleY(1)"}}></polygon>
                        <polygon  fill="#F68787" points="39 28 75 28 75 225.828125 39 225.828125" style={{transform: "scaleY(1)"}}></polygon>
                    </g>
                </g>

                      <g  transform="translate(12.000000, 104.500000)" fillRule="nonzero">
                        <polygon  fill="#FCFCFC" points="0.5 440.148437 1528 440.148438 1528 1.0463852e-12 1362 60 1191.5 240.5 1021.5 346 850.5 245 680.5 270 509.5 303 340 291 167.120392 333 0.5 297.5"></polygon>
                        <polyline  stroke="#87C4F5" strokeWidth="4" points="1528 1.6328125 1362 60 1191.5 240.5 1021.5 346 850.5 245 680.5 270 509.5 303 340 291 167.120392 333 0 297.5"></polyline>
                       </g>

                <g  transform="translate(169.000000, 518.000000)" fill="#969696" style={{opacity: 1, fontWeight: "normal", fontSize: 13, fontFamily: "WorkSans-Regular, Work Sans"}}>
                    <text >
                        <tspan x="1190" y="12">Aug</tspan>
                    </text>
                    <text >
                        <tspan x="1020" y="12">Jul</tspan>
                    </text>
                    <text >
                        <tspan x="850" y="12">Jun</tspan>
                    </text>
                    <text >
                        <tspan x="681" y="12">May</tspan>
                    </text>
                    <text >
                        <tspan x="510" y="12">Apr</tspan>
                    </text>
                    <text >
                        <tspan x="338" y="12">Mar</tspan>
                    </text>
                    <text >
                        <tspan x="169" y="12">Feb</tspan>
                    </text>
                    <text >
                        <tspan x="0" y="12">Jan</tspan>
                    </text>
                </g>

                <g  transform="translate(179.000000, 177.000000)" style={{opacity: 1}}>
                    <rect fill="url(#linearGradient-line)" x="1191" y="0" width="1" height="338"></rect>
                    <rect fill="url(#linearGradient-line)" x="1021" y="179" width="1" height="159"></rect>
                    <rect fill="url(#linearGradient-line)" x="851" y="276" width="1" height="62"></rect>
                    <rect fill="url(#linearGradient-line)" x="680" y="179" width="1" height="159"></rect>
                    <rect fill="url(#linearGradient-line)" x="510" y="205" width="1" height="133"></rect>
                    <rect fill="url(#linearGradient-line)" x="339" y="225" width="1" height="113"></rect>
                    <rect fill="url(#linearGradient-line)" x="170" y="225" width="1" height="113"></rect>
                    <rect fill="url(#linearGradient-line)" x="0" y="269" width="1" height="69"></rect>
                </g>

                <g className="dots" transform="translate(0.000000, 92.000000)" fill="#87C4F5">
                    <circle cx="1370.5" cy="77.5" r="12.5"></circle>
                    <circle cx="1200.5" cy="257.5" r="12.5"></circle>
                    <circle cx="1030.5" cy="358.5" r="12.5"></circle>
                    <circle cx="859.5" cy="257.5" r="12.5"></circle>
                    <circle cx="689.5" cy="282.5" r="12.5"></circle>
                    <circle cx="518.5" cy="315.5" r="12.5"></circle>
                    <circle cx="349.5" cy="303.5" r="12.5"></circle>
                    <circle cx="179.5" cy="345.5" r="12.5"></circle>
                </g>
            </g>
        </g>
    </g>
</svg>    
  )
}



export const HomepageSvg2 = () => {
  return (
    <div className="blue-arrow">
                <motion.svg
                variants={svgVariants}
                initial="hidden"
                animate="visible" viewBox="0 0 1050 87" preserveAspectRatio="xMidYMid meet">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                        <g transform="translate(3.000000, 3.000000)" stroke="#3BA0F2" strokeWidth="7" style={{mixBlendMode: "darken"}}>
                         <motion.path variants={pathVariants} d="M144.55,21.15 C88,13.77 -1.91,32.48 0.55,52.15 C3.73,77.57 130.55,83.15 212.55,79.15 C272.67,76.22 381.75,68.95 378.55,40.15 C373.63,-4.11 114.89,-13.33 16.55,22.73" strokeDasharray="924.9990234375" style={{strokeDashoffset: "0px"}}>
                         </motion.path>
                        </g>
                    </g>
                </motion.svg>
            
                <motion.svg
                variants={svgVariants}
                initial="hidden"
                animate="visible" 
                 className="arrow" viewBox="0 0 1000 120" preserveAspectRatio="xMidYMid meet" >
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" >
                        <g stroke="#3BA0F2" strokeWidth="4.5" style={{mixBlendMode: "darken"}}>
                            <g 
                            >
                               <motion.path variants={pathVariants} d="M0.233522499,0.0166880603 C7.4435225,27.2866881 36.2,79.46 68.09,104.86" strokeDasharray="126.44490051269531" style={{strokeDashoffset: "0px"}}>
                               </motion.path>
                               <motion.path variants={pathVariants} d="M28.2,102.73 C45.5,109.86 83,116.5 83,116.5 C83,116.5 65.23,74.07 65.23,59" strokeDasharray="116.97999572753906" style={{strokeDashoffset: "0px"}}>
                               </motion.path>
                            </g>
                        </g>
                    </g>
                </motion.svg>
       </div>
  )
}


export const SectionOne = () => {
  return (
    <svg width="44" height="44" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="a">
               <stop stopColor="#23EA76" offset="0%"></stop>
               <stop stopColor="#00AB6A" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path d="M341 3128v15h-20v-15h9v-5h12v-3h-15v-21h32v21h-15v3h12v5h9v15h-20v-15h9v-3h-22v3h9zm-2 2h-16v2h3v1h-3v2h3v1h-3v2h3v1h-3v2h16v-11zm24 11v-11h-16v2h3v1h-3v2h3v1h-3v2h3v1h-3v2h16zm-6-40h-28v2h3v1h-3v2h3v1h-3v2h3v1h-3v2h3v1h-3v2h3v1h-3v2h28v-17zm-22.644 15.115l-1.561-1.25 4.997-6.242 3.702 2.744 4.921-6.161 3.573 4.362 3.816-4.63 1.543 1.273-5.364 6.507-3.548-4.332-4.583 5.737-3.703-2.746-3.793 4.738zm6.536-3.994l1.376-.18-.774-.574-.602.754zm-13.379 27.024l-.886-.464 1.989-3.796 2.21 1.612 1.938-3.686 2.426 1.836 1.43-2.952.9.436-1.962 4.049-2.457-1.86-1.928 3.667-2.21-1.61-1.45 2.768zm24 0l-.886-.464 1.989-3.796 2.21 1.612 1.938-3.686 2.426 1.836 1.43-2.952.9.436-1.962 4.049-2.457-1.86-1.928 3.667-2.21-1.61-1.45 2.768z" transform="translate(-321 -3099)" fill="url(#a)" fillRule="evenodd"></path>
          </svg>
  )
}

export const SectionTwo = () => {
    return (
        <svg width="45" height="48" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient x1="93.945%" y1="0%" x2="6.055%" y2="100%" id="a">
                    <stop stopColor="#23EA76" offset="0%"></stop>
                    <stop stopColor="#00AB6A" offset="100%"></stop>
                </linearGradient>
            </defs>
            <path d="M705 3138h3v1h-3v2h6v-26h-6v2h3v1h-3v2h3v1h-3v2h3v1h-3v2h3v1h-3v2h3v1h-3v2h3v1h-3v2h3v1h-3v2zm29 0v-2h-3v-1h3v-2h-3v-1h3v-2h-3v-1h3v-2h-3v-1h3v-2h-3v-1h3v-2h-3v-1h3v-2h-3v-1h3v-2h-6v26h6v-2h-3v-1h3zm-11-18h-2v2h2v-2zm1-1v4h-4v-4h4zm-1 6h-2v2h2v-2zm1-1v4h-4v-4h4zm-1-14h-2v2h2v-2zm1-1v4h-4v-4h4zm-1 6h-2v2h2v-2zm1-1v4h-4v-4h4zm-6 6h-2v2h2v-2zm1-1v4h-4v-4h4zm-1 6h-2v2h2v-2zm1-1v4h-4v-4h4zm-1-14h-2v2h2v-2zm1-1v4h-4v-4h4zm-1 6h-2v2h2v-2zm1-1v4h-4v-4h4zm-6 16h13v-23h-13v23zm0 2v9h2v-7h1v7h3v-6h1v6h3v-7h1v7h2v-9h-13zm11-27h4v8h8v28h6v2h-45v-2h6v-28h8v-8h4v-4h4v-6h1v6h4v4zm-2 0v-2h-5v2h5zm-6 29h7v1h-7v-1z" transform="translate(-697 -3095)" fill="url(#a)" fillRule="nonzero"></path>
        </svg>
    )
  }
  export const SectionThree = () => {
    return (
        <svg width="45" height="41" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient x1="100%" y1="8.494%" x2="0%" y2="91.506%" id="a">
                    <stop stopColor="#23EA76" offset="0%"></stop>
                    <stop stopColor="#00AB6A" offset="100%"></stop>
                </linearGradient>
            </defs>
            <path d="M1085 3141h8v-32h4v32h8v-27h4v27h11v2h-45v-2h6v-23h4v23zm1-12h4v1h-4v-1zm0 2h4v1h-4v-1zm0 2h4v1h-4v-1zm0-10h4v1h-4v-1zm0-2h4v1h-4v-1zm0 14h4v1h-4v-1zm0-10h4v1h-4v-1zm0 12h4v1h-4v-1zm0-10h4v1h-4v-1zm0 12h4v1h-4v-1zm12-22h4v1h-4v-1zm0-2h4v1h-4v-1zm0 14h4v1h-4v-1zm0-10h4v1h-4v-1zm0 12h4v1h-4v-1zm0-10h4v1h-4v-1zm0 12h4v1h-4v-1zm0-10h4v1h-4v-1zm0 12h4v1h-4v-1zm0-10h4v1h-4v-1zm0 12h4v1h-4v-1zm0-10h4v1h-4v-1zm0 12h4v1h-4v-1zm12-10h4v1h-4v-1zm0 2h4v1h-4v-1zm0 2h4v1h-4v-1zm0 2h4v1h-4v-1zm0-10h4v1h-4v-1zm0 12h4v1h-4v-1zm0-10h4v1h-4v-1zm0 12h4v1h-4v-1zm-26-28h3v3h-3v-3zm12-9h3v3h-3v-3zm12 5h3v3h-3v-3z" transform="translate(-1075 -3102)" fill="url(#a)" fillRule="nonzero"></path>
        </svg>
    )
  }
  export const SectionFour = () => {
    return (
        <svg width="52" height="47" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient x1="100%" y1="9.153%" x2="0%" y2="90.847%" id="a">
                    <stop stopColor="#23EA76" offset="0%"></stop>
                    <stop stopColor="#00AB6A" offset="100%"></stop>
                </linearGradient>
            </defs>
            <path d="M341.54 3316.404v-3.618c-4.188-.358-7.112-2.471-8.375-6.089l2.671-1.36c.541 2.65 2.96 4.512 5.703 5.014v-8.31c-3.718-.788-7.436-1.79-7.436-6.017 0-3.546 2.78-6.411 7.436-6.805v-3.618h2.49v3.654c3.646.286 5.776 1.898 7.436 4.942l-2.346 1.827c-1.19-2.722-2.563-4.012-5.09-4.334v8.417c3.719.788 7.473 1.827 7.473 6.16 0 3.726-2.96 6.161-7.472 6.52v3.617h-2.49zm0-16.798v-7.952c-3.105.287-4.693 1.791-4.693 4.155 0 2.328 2.093 3.188 4.692 3.797zm2.49 10.816c2.923-.25 4.764-1.432 4.764-3.94 0-2.4-2.13-3.295-4.764-3.904v7.844zm-8.266-25.416c.154 1.393-.534 2.466-1.91 2.466-.926 0-1.6-.418-2.217-.822-.463.501-1.137.822-1.98.822-.954 0-1.628-.474-1.628-1.254 0-.766.716-1.281 1.727-1.281.52 0 .94.083 1.291.209v-.14c0-.46-.112-.863-.393-1.35h-2.274v-1.213h1.39c-.491-.682-.646-1.142-.646-1.685 0-1.518 1.18-2.758 3.2-2.758 1.713 0 2.752.766 3.131 2.34l-1.586.752c-.267-1.114-.702-1.63-1.6-1.63-.885 0-1.446.488-1.446 1.254 0 .432.168.808.688 1.56.042.056.084.112.112.167h2.709v1.212h-2.078c.113.32.155.64.155.975 0 .376-.07.752-.197 1.1.393.223.786.404 1.306.404.702 0 1.025-.376 1.01-1.24l1.236.112zm-6.008 1.63c.491 0 .828-.195 1.039-.53-.323-.167-.66-.292-1.04-.292-.406 0-.603.153-.603.39 0 .279.253.432.604.432zm-7.366 15.31l.758-.056h1.727v.836h-2.71v.96h2.71v.795h-2.71v1.616h-1.81v-1.616h-2.695v-.794h2.695v-.961h-2.695v-.836h1.712l.758.056-3.13-5.043h2.035l1.573 3.065.645 1.407h.028l.632-1.421 1.572-3.05h2.036l-3.13 5.042zm10.552 19.335h-1.782v.92h2.526v1.295h-2.526V3325h-1.895v-1.504h-1.236v-1.296h1.236v-.919h-1.236v-1.379h1.236v-4.095h3.677c2.19 0 3.411.975 3.411 2.744 0 1.755-1.22 2.73-3.41 2.73zm-1.782-3.97v2.591h1.488c1.193 0 1.74-.404 1.74-1.295 0-.892-.547-1.296-1.74-1.296h-1.488zm21.033-38.316h7.019v.995h-7.019v-.995zm-.782 2.915h8.673v1.005h-2.657v3.363c0 .258.11.388.341.388h1.103c.12 0 .22-.08.28-.23.071-.158.121-.646.141-1.452l.943.299c-.07 1.124-.2 1.79-.381 2-.18.199-.441.308-.792.308h-1.595c-.711 0-1.062-.368-1.062-1.094v-3.582h-1.484v.199c-.05 1.263-.331 2.278-.843 3.034-.5.697-1.303 1.244-2.426 1.632l-.562-.875c1.083-.379 1.805-.856 2.186-1.413.381-.617.582-1.403.622-2.378v-.2h-2.487v-1.004zm2.022 35.27h3.256c-.07-.432-.238-.766-.519-1.003-.365-.306-.884-.446-1.572-.446h-1.502l.309-.919h6.667l-.309.92h-1.95c.294.39.477.877.533 1.448h1.74l-.308.92h-1.46a2.415 2.415 0 0 1-.604 1.225c-.45.446-1.039.752-1.783.92.113.083.323.334.632.724l3.032 3.788h-2.232l-2.513-3.287a2.798 2.798 0 0 0-.715-.696 1.568 1.568 0 0 0-.899-.293v-1.086h.87c.885 0 1.545-.154 1.98-.46.295-.209.491-.488.575-.836h-3.537l.309-.92zm14.023-13.827l1.544.487c-.463 1.658-1.895 2.535-3.608 2.535-2.105 0-3.523-1.142-4-3.078h-1.278v-1.017h1.11c-.015-.209-.029-.418-.029-.64v-.335h-1.08v-1.017h1.207c.42-2.13 1.867-3.385 4.042-3.385 1.727 0 3.075.78 3.538 2.173l-1.488.683c-.225-.975-1.01-1.435-1.923-1.435-1.193 0-2.022.697-2.345 1.964h3.327l-.337 1.017h-3.13c-.014.111-.014.223-.014.334 0 .223.014.432.028.641h2.878l-.31 1.017h-2.371c.35 1.058 1.095 1.657 2.218 1.657.926 0 1.754-.529 2.02-1.601z" transform="translate(-317 -3278)" fill="url(#a)" fillRule="nonzero"></path>
        </svg>
    )
  }
  export const SectionFive = () => {
    return (
        <svg width="48px" height="50px" viewBox="0 0 48 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <defs>
              <linearGradient x1="100%" y1="29.145%" x2="0%" y2="70.855%" id="linearGradient-1">
                 <stop stopColor="#23EA76" offset="0%"></stop>
                 <stop stopColor="#00AB6A" offset="100%"></stop>
              </linearGradient>
            </defs>
            <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
               <g id="icon-multi-user" transform="translate(0.000000, 10.000000)" fill="url(#linearGradient-1)" fillRule="nonzero">
                 <path d="M28.247,17.9999991 L30,17.9999991 C30.422,17.9999991 30.84,18.024 31.25,18.07 C31.898,18.023 32.58,17.9999991 33,17.9999991 L38,17.9999991 C43.523,17.9999991 48,22.477 48,27.9999991 L40.955,27.9999991 C40.985,28.33 41,28.663 41,28.9999991 L41,30.9999991 L7,30.9999991 L7,28.9999991 C7,28.663 7.015,28.33 7.045,27.9999991 L0,27.9999991 C0,22.477 4.477,17.9999991 10,17.9999991 L15,17.9999991 C15.42,17.9999991 16.102,18.023 16.75,18.07 C17.16,18.024 17.578,17.9999991 18,17.9999991 L19.753,17.9999991 C18.7117218,17.4780411 17.7749147,16.769674 16.989,15.91 C14.4244993,18.5142564 10.2880451,18.7071312 7.49233557,16.3528109 C4.69662608,13.9984907 4.18281905,9.88954241 6.31271345,6.91929577 C8.44260784,3.94904913 12.4991883,3.11741877 15.626,5.01 C17.2804898,1.92413488 20.4985862,-0.00118909045 24,-9.44609837e-07 C27.5017726,-0.00155782011 30.7203408,1.9238185 32.375,5.01 C35.5018117,3.11741877 39.5583922,3.94904913 41.6882866,6.91929577 C43.8181809,9.88954241 43.3043739,13.9984907 40.5086644,16.3528109 C37.7129549,18.7071312 33.5765007,18.5142564 31.012,15.91 C30.2257883,16.7697719 29.288635,17.4781445 28.247,17.9999991 L28.247,17.9999991 Z M40.586,26 L45.748,26 C44.86,22.55 41.728,20 38,20 L36.326,20 C38.391637,21.4527074 39.8955571,23.5709048 40.586,26 L40.586,26 Z M11.674,20 L10,20 C6.35161896,20.0001323 3.16512098,22.4677352 2.252,26 L7.414,26 C8.10444286,23.5709048 9.60836303,21.4527074 11.674,20 L11.674,20 Z M32.217,14.27 C33.978955,16.3080458 37.0388581,16.5836633 39.1366473,14.8932798 C41.2344366,13.2028964 41.6157619,10.1543618 39.9989742,7.99934125 C38.3821865,5.84432072 35.3486711,5.35774424 33.139,6.899 C33.374,7.725 33.5,8.598 33.5,9.5 C33.502506,11.1755902 33.0597323,12.8217559 32.217,14.27 L32.217,14.27 Z M14.861,6.899 C12.6513289,5.35774424 9.61781348,5.84432072 8.0010258,7.99934125 C6.38423813,10.1543618 6.76556344,13.2028964 8.86335267,14.8932798 C10.9611419,16.5836633 14.021045,16.3080458 15.783,14.27 C14.9402677,12.8217559 14.497494,11.1755902 14.5,9.5 C14.5,8.598 14.626,7.725 14.86,6.899 L14.861,6.899 Z M24,17 C28.1421356,17 31.5,13.6421356 31.5,9.5 C31.5,5.35786438 28.1421356,2 24,2 C19.8578644,2 16.5,5.35786438 16.5,9.5 C16.5,13.6421356 19.8578644,17 24,17 Z M9,29 L39,29 C39,24.0294373 34.9705627,20 30,20 L18,20 C13.0294373,20 9,24.0294373 9,29 L9,29 Z"></path>
               </g>
           </g>
       </svg>
    )
  }
  export const SectionSix = () => {
    return (
        <svg width="45px" height="45px" viewBox="0 0 45 45" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g fillRule="nonzero">
                    <g>
                     <circle fill="#2CA01C" cx="22.5" cy="22.5" r="22.5"></circle>
                     <path d="M6.24807692,22.5 C6.24903244,27.3315647 10.1655507,31.2480829 14.9971154,31.2490385 L16.2484615,31.2490385 L16.2484615,27.9986538 L14.9971154,27.9986538 C11.9618741,27.9948395 9.50227586,25.5352413 9.49846154,22.5 C9.50132231,19.4640828 11.9611992,17.0034316 14.9971154,16.9996154 L18.0017308,16.9996154 L18.0017308,33.9992308 C18.0017308,35.7940385 19.4555769,37.2496154 21.2521154,37.2496154 L21.2521154,13.7492308 L14.9971154,13.7492308 C10.1648749,13.7501865 6.24807692,17.6677594 6.24807692,22.5 Z M30.0028846,13.7509615 L28.7515385,13.7509615 L28.7515385,17.0013462 L30.0028846,17.0013462 C33.0381259,17.0051605 35.4977241,19.4647587 35.5015385,22.5 C35.4986777,25.5359172 33.0388008,27.9965684 30.0028846,28.0003846 L26.9982692,28.0003846 L26.9982692,11.0007692 C26.9982692,9.20596154 25.5444231,7.75038462 23.7478846,7.75038462 L23.7478846,31.2507692 L30.0028846,31.2507692 C34.7873363,31.1834776 38.6305896,27.2857903 38.6305896,22.5008654 C38.6305896,17.7159405 34.7873363,13.8182531 30.0028846,13.7509615 L30.0028846,13.7509615 Z" fill="#FFFFFF"></path>
                    </g>
                </g>
            </g>
        </svg>
    )
  }



  
  export const LeftIcon = () => {
    const Color = location.pathname === '/blog'
     || location.pathname === '/blog/'
     || location.pathname === '/category/small-business' ? '#a9aaae' : '#00ad6a';
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style={{fill: Color}}>
         <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" strokeWidth="1" fillRule="evenodd"></path>
        </svg>
    )
  }

  
  export const RightIcon = () => {
    const Color = location.pathname === '/blog/page/5'
    || location.pathname === '/category/small-business/page/2' ? '#a9aaae' : '#00ad6a';
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill={Color}>
         <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" ></path>
        </svg>
    )
  }
  