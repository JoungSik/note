import { useState } from 'react'

import styles from '../../../styles/container/status.module.css'

const StatusContainer = ({}) => {
  const [counts, setCounts] = useState([5, 2, 1]);

  return (
    <section className={styles.section}>
      <div className={'container'}>
        <div className={'text-center'}>
          <h2 className={styles.title}>상태</h2>
          <h3 className={styles.sub_title}>현재 서비스에 운영중인 아이디어들의 상태 입니다.</h3>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <h4 className="my-3">작성</h4>
            <p className="text-muted">
              현재까지 작성된 아이디어는 {counts[0]}개 입니다.
            </p>
          </div>
          <div className="col-md-4">
            <h4 className="my-3">제작</h4>
            <p className="text-muted">
              현재까지 제작중인 아이디어는 {counts[1]}개 입니다.
            </p>
          </div>
          <div className="col-md-4">
            <h4 className="my-3">실현</h4>
            <p className="text-muted">
              현재까지 실현된 아이디어는 {counts[2]}개 입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatusContainer;
