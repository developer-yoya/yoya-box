import styles from "../styles/color-design.module.css"

const First = ({color = 'red'}) => {
    const title = "First";
    return(
        <>
            <div className={`${styles["color-design"]} ${styles[color]}`}>
                <h3>Hello {title.toLowerCase()}</h3>
            </div>
        </>
    )
}

export default First;