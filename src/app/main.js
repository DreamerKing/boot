import React, {Component} from 'react';
import StudentLogin from './student/login';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

export class Main extends Component {
  render() {
    return (
      <div style={styles.container}>
        <main style={styles.main}>
          <StudentLogin/>
        </main>
      </div>
    );
  }
}
