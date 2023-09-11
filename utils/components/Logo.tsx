import React from "react";
import { twMerge } from "tailwind-merge";

type LogoProps = {
  className?: string;
};

function Logo({ className }: LogoProps) {
  return (
    <svg
      id="svg"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 519 588"
      className={twMerge("fill-slate-950 dark:fill-slate-50", className)}
    >
      <path
        d="M0 0 C248.87046136 0 248.87046136 0 278.5625 5.875 C279.94429807 6.13903287 281.32613491 6.40286292 282.70800781 6.66650391 C292.34717937 8.53665082 301.74605587 10.6943949 311 14 C312.22734863 14.42901611 312.22734863 14.42901611 313.47949219 14.86669922 C345.8278605 26.28272601 374.1422652 44.55726786 390 76 C405.43342787 109.87916335 407.04647767 151.68005256 393.984375 186.68920898 C380.8113949 220.29169446 355.19464989 245.74660329 322.16552734 260.24414062 C294.04865896 272 294.04865896 272 287 272 C287 272.66 287 273.32 287 274 C287.6084375 274.12375 288.216875 274.2475 288.84375 274.375 C316.26698224 280.82752523 340.40360459 301.05615201 355.203125 324.44213867 C369.75251394 348.05741574 379.49659983 373.93320465 389.375 399.75 C390.3322066 402.24220911 391.28978567 404.73427084 392.24804688 407.22607422 C393.7156719 411.04296484 395.18310987 414.85992565 396.64874268 418.67758179 C401.17008971 430.45384782 405.71949572 442.21917237 410.28057861 453.98010254 C411.46581315 457.03683185 412.6497281 460.0940697 413.83349609 463.15136719 C414.56590618 465.04108328 415.29848495 466.93073402 416.03125 468.8203125 C416.54638657 470.14935608 416.54638657 470.14935608 417.07192993 471.50524902 C418.64436406 475.55196222 420.23117077 479.59158059 421.859375 483.61621094 C422.143573 484.31898163 422.427771 485.02175232 422.72058105 485.74581909 C423.47199609 487.59626772 424.22892748 489.44447372 424.98632812 491.29248047 C426 494 426 494 426 496 C416.87185926 496.2333345 407.74476897 496.41019154 398.61427975 496.51812172 C394.37287333 496.56996659 390.1335298 496.64008625 385.89331055 496.75439453 C381.78876061 496.86433276 377.68617342 496.9231009 373.58026314 496.94877243 C372.02654723 496.96702622 370.47291961 497.00266581 368.9200573 497.05730057 C356.13836959 497.48845965 348.94071917 493.8583987 339 486 C337.63061086 485.03366612 336.25756196 484.07239126 334.875 483.125 C307.61035038 462.11097966 299.93980959 437.38955434 295.5 404.1875 C291.81530288 377.38617676 281.26475841 351.45499928 270 327 C269.42983154 325.74437256 269.42983154 325.74437256 268.84814453 324.46337891 C260.61843789 306.36516503 251.11913824 289.57976176 239.64794922 273.3359375 C238.0162098 271.02297709 236.39916463 268.70035848 234.78515625 266.375 C228.07506042 256.73964162 221.39173567 247.26281235 213 239 C211.6696324 237.6715141 210.34029182 236.3419993 209.01171875 235.01171875 C208.30595703 234.30595703 207.60019531 233.60019531 206.87304688 232.87304688 C203.58203125 229.58203125 200.29101563 226.29101563 197 223 C198.8870644 218.95512322 201.56309156 215.88156811 204.5 212.5625 C208.4304888 208.04193782 212.27109953 203.4880249 215.9375 198.75 C216.33533691 198.23703369 216.73317383 197.72406738 217.14306641 197.19555664 C219.58840861 193.9951631 221.86899531 190.71969846 224.08984375 187.359375 C234.35686199 172.00280287 234.35686199 172.00280287 242.46484375 169.53515625 C248.78661091 168.57815945 255.11169055 168.3969713 261.49609375 168.2421875 C266.9499719 168.06978645 272.24537371 167.38715732 277.625 166.5 C278.42429932 166.36899902 279.22359863 166.23799805 280.04711914 166.10302734 C283.12348128 165.57572755 286.03481279 164.98839574 289 164 C288.5771652 159.20787222 286.31892077 156.29468721 283 153 C280.74430768 151.46896246 278.63424143 150.14806919 276.25 148.875 C275.62947754 148.5337207 275.00895508 148.19244141 274.36962891 147.84082031 C266.79134451 143.72154479 259.25748822 140.65206046 251.0546875 138.01171875 C248.08249533 137.02732262 245.17279179 135.9338481 242.25 134.8125 C239.01986444 133.60004224 236.31501319 132.83706579 232.875 132.6875 C228.88247955 131.9791496 227.97016572 131.4257143 225 128.9375 C216.08138556 121.46931767 204.68891215 115.80183086 193 115 C192.13375 114.93167969 191.2675 114.86335938 190.375 114.79296875 C168.93852338 113.95171167 148.27850586 124.37416037 132.875 138.5 C131.85136205 139.45803251 130.8291869 140.41763076 129.80859375 141.37890625 C127.5644967 143.47318875 125.29035374 145.46957121 122.9375 147.4375 C117.49079538 152.15797734 112.79077837 157.63201942 108 163 C107.3709375 163.6909375 106.741875 164.381875 106.09375 165.09375 C101.57854259 170.12011297 97.49354467 175.46961374 93.40625 180.84375 C91.46093912 183.39539155 89.49047313 185.92124152 87.5 188.4375 C83.24369753 193.90275224 79.24956032 199.55601078 75.25976562 205.21679688 C74.06003931 206.91501413 72.85108471 208.60630017 71.640625 210.296875 C66.23328757 217.94173137 61.43814533 225.76044539 57 234 C56.50826294 234.90576782 56.50826294 234.90576782 56.0065918 235.82983398 C40.83554641 264.78078918 38.41554613 301.03139012 48 332 C53.73139333 349.45427055 62.5611583 363.72019037 74 378 C74.50192871 378.63341309 75.00385742 379.26682617 75.52099609 379.91943359 C82.97302035 389.31885895 90.71688629 398.32420534 99 407 C99.94939453 408.01126953 99.94939453 408.01126953 100.91796875 409.04296875 C104.94507912 413.22312845 109.37334928 416.82731371 113.890625 420.46484375 C118.01966398 423.80529519 122.03104945 427.28281294 126.05297852 430.75073242 C126.60912842 431.23002197 127.16527832 431.70931152 127.73828125 432.203125 C128.27662598 432.66912109 128.8149707 433.13511719 129.36962891 433.61523438 C130.48268958 434.56061925 131.61086571 435.48842009 132.75146484 436.40039062 C134.20053378 437.56032509 135.60481484 438.77578307 137 440 C137 440.66 137 441.32 137 442 C137.58394531 442.268125 138.16789063 442.53625 138.76953125 442.8125 C141.02298004 444.01223455 142.76302256 445.33017142 144.6875 447 C145.28949219 447.515625 145.89148438 448.03125 146.51171875 448.5625 C148 450 148 450 149 452 C149 466.52 149 481.04 149 496 C99.83 496 50.66 496 0 496 C0 332.32 0 168.64 0 0 Z "
        transform="translate(46,45)"
      />
    </svg>
  );
}

export default Logo;
