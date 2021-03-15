import Dot from 'react-connect-the-dots';

const SVGComponent = () => {
    const CustomComponent = ({ getRef }) => (
        <div ref={getRef}>hello</div>
      );

    return (
        <>
            <div>
                <div className="title-container">
                    <h1>Próba</h1>
                </div>
                    <div className="relative-position-container">
                        <Dot pair="a-b" connector={(props) => <div className="sweet-line" {...props} />}>
                        {(ref) => <CustomComponent className="position-top-left" getRef={ref} />}
                        </Dot>
                    
                        <Dot pair="b-c" connector={(props) => <div className="sweet-line thicc" {...props} />}>
                        <Dot pair="a-b">
                            {(ref) => <CustomComponent className="position-bottom-left" getRef={ref} />}
                        </Dot>
                        </Dot>
                    
                        <Dot pair="b-c">
                        {(ref) => <CustomComponent className="position-bottom-right" getRef={ref} />}
                        </Dot>
                    </div>
            </div>
        </>
    )
}

export default SVGComponent;