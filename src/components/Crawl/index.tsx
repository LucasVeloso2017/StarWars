import React, { useEffect } from 'react';

import Logo from '../../assets/logo.svg'
import { Container } from './styles';

const Crawl: React.FC = () => {
  
    useEffect(()=>{
        pageScript()
    })

    function pageScript(){
    
        

        let w:any;
        let h:any;

        


        const crawl:any = document.getElementById("crawl");
        const crawlContent:any = document.getElementById("crawl-content");
        const crawlContentStyle:any = crawlContent.style;

        // start crawl at bottom of 3d plane
        let crawlPos = crawl.clientHeight;

        const makeStars = (count:any) => {
        const out = [];
        for (let i = 0; i < count; i++) {
            const s = {
            x: Math.random() * 1600 - 800,
            y: Math.random() * 900 - 450,
            z: Math.random() * 1000
            };
            out.push(s);
        }
        return out;
        };

        let stars = makeStars(2000);

        


        const moveStars = (distance:any) => {
        const count = stars.length;
        for (var i = 0; i < count; i++) {
            const s = stars[i];
            s.z -= distance;
            if (s.z <= 1) {
            s.z += 999;
            }
        }
        };

        const moveCrawl = (distance:any) => {
        crawlPos -= distance;
        crawlContentStyle.top = crawlPos + "px";

        // if we've scrolled all content past the top edge
        // of the plane, reposition content at bottom of plane
        if (crawlPos < -crawlContent.clientHeight) {
            crawlPos = crawl.clientHeight;
        }
        };

        let prevTime:any;
        const init = (time:any) => {
        prevTime = time;
        requestAnimationFrame(tick);
        };

        const tick = (time:any) => {
        let elapsed = time - prevTime;
        prevTime = time;

        moveStars(elapsed * 0.02);

        // time-scale of crawl, increase factor to go faster
        moveCrawl(elapsed * 0.06);

        requestAnimationFrame(tick);
        };

        requestAnimationFrame(init);
    }

    return(
        <>  
            <Container>
                <div id="crawl-container" className="stretch">
                    <div id="crawl">
                        <div id="crawl-content">
                            <h1>
                            Um Projeto Frontend
                            </h1>
                            <h2>
                                ReactJs
                            </h2>
                            <p>
                                Apos ver muitos filmes da trilogia e maratonar todas as series,
                                tive a iniciativa Jedi de fazer esse projeto.
                            </p>
                            <p>
                                Se você esta no caminho da luz na força veja mais sobre esse projeto 
                                em meu GitHub, que a força esteja com você.
                            </p>
                        </div>
                    </div>
                </div>
                a
            </Container>
        </>  
    );
}

export default Crawl;