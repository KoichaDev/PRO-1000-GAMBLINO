
export const PaddingIcon = ({ fillLeft, fillRight}) => {
    return (
        <svg x="0px" y="0px" width="24px" height="24px"
            viewBox="0 0 24 24" enableBackground="new 0 0 24 24">
            <g>
                <g>
                    <g>
                        <g>
                            <path d="M16,6H8C7.4,6,7,5.6,7,5s0.4-1,1-1h8c0.6,0,1,0.4,1,1S16.6,6,16,6z" />
                        </g>
                    </g>
                    <g>
                        <g>
                            <path d="M16,20H8c-0.6,0-1-0.4-1-1s0.4-1,1-1h8c0.6,0,1,0.4,1,1S16.6,20,16,20z" />
                        </g>
                    </g>
                    <g>
                        <g>
                            <path d="M19,17c-0.6,0-1-0.4-1-1V8c0-0.6,0.4-1,1-1s1,0.4,1,1v8C20,16.6,19.6,17,19,17z" fill={fillRight} />
                        </g>
                    </g>
                    <g>
                        <g>
                            <path d="M5,17c-0.6,0-1-0.4-1-1V8c0-0.6,0.4-1,1-1s1,0.4,1,1v8C6,16.6,5.6,17,5,17z" fill={fillLeft} />
                        </g>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M23,24H1c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1h22c0.6,0,1,0.4,1,1v22C24,23.6,23.6,24,23,24z M2,22h20V2H2V22z" />
                    </g>
                </g>
            </g>
        </svg>

    )
}

