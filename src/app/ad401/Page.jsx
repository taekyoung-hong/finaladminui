import React from 'react';
import styles from '../styles/ad401.module.css'

function page(props) {
    return (
        <>

            <div className={styles.ad401__main_background_color}>
                <div className={styles.ad401__main_container}>
                    <p className={styles.ad401__main_name}>의약품 정의</p>
                    <div className={styles.ad401__main_cotainer_box}>
                        <div className={styles.ad401__main_title}>메인 타이틀</div>
                        <div className={styles.ad401__main_content}>내용</div>
                    </div>
                    <div className={styles.ad401__sub1_cotainer_box}>
                        <div className={styles.ad401__sub1_title}>서브 타이틀1</div>
                        <div className={styles.ad401__sub1_content}>내용</div>
                    </div>
                    <div className={styles.ad401__sub2_cotainer_box}>
                        <div className={styles.ad401__sub2_title}>서브 타이틀2</div>
                        <div className={styles.ad401__sub2_content}>내용</div>
                    </div>
                    <div className={styles.ad401__sub3_cotainer_box}>
                        <div className={styles.ad401__sub3_title}>서브 타이틀3</div>
                        <div className={styles.ad401__sub3_content}>내용</div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default page;