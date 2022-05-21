import { RiCloseLine } from "react-icons/ri";
import styles from "./pages/Modal.module.css";
//const Modal =() => {
function Modal({ show }) {
    console.log("isShow: " + show)
    return (
        <>

            <div className="asjb" style={{ display: show ? 'block' : 'none' }}>
                <div className={styles.darkBG} />
                <div className={styles.centered}>
                    <div className={styles.modal}>
                        <div className={styles.modalHeader}>
                            <h5 className={styles.heading}>Add a product</h5>

                        </div>
                        <button className={styles.closeBtn} >
                            <RiCloseLine style={{ marginBottom: "-3px" }} />
                        </button>

                        <div className={styles.modalContent}>
                            <form>
                                <label>
                                    Title:
                                    <input type="text" /><br />
                                </label>
                                <br />
                                <label>
                                    Price:
                                    <input type="text" /><br />
                                </label>
                                <br />
                                <label>
                                    description:
                                    <input type="text" /><br />
                                </label>
                                <br />
                                <label>
                                    Image:
                                    <input type="text" /><br />
                                </label>

                                <input type="submit" value="Submit" />
                            </form>
                        </div>


                        <div className={styles.modalActions}>
                            <div className={styles.actionsContainer}>



                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default Modal;