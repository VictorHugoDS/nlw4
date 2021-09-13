export function ExperienceBar() {
    
    const inicio = 0;
    const fim = 800;

    const corAtual = (xpAtual: {xp : number}) =>{
        const media = (inicio+fim)/2;
        
        if(xpAtual.xp>media){
            return "purple";
        } else {
            if(xpAtual.xp<media){
                return "red"
            }   
            return "green"
        }

    }

const xpAtual ={
    xp:440
}
    return(
        <header className="experience-bar">
            <span>{`${inicio}xp`}</span>
            <div>
                <div style={{width:'50%', backgroundColor:corAtual(xpAtual)}}></div>
                <span className="current-experience"
                style={{left:'50%'}}
                >
                    300 xp
                </span>
            </div>
            <span>{`${fim}xp`}</span>
        </header>
    )
}