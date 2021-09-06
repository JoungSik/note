import { FormikHelpers, useFormik } from 'formik';

import { User } from '../../../types/user';

import { EditText } from '../../atoms/editText';
import { Button, COLORS } from '../../atoms/button';

export const LoginForm = () => {
  const formik = useFormik<User>({
    initialValues: new User(),
    onSubmit: (values: User, formikHelpers: FormikHelpers<User>) => {
      console.log(values);
    }
  });

  return (
    <div className={'card'}>
      <div className="card-body">
        <h5 className="card-title">로그인</h5>
        <form onSubmit={formik.handleSubmit}>
          <EditText title={'이메일'} type={'email'} name={'email'} onChangeValue={(v) => console.log(v)} />
          <EditText title={'비밀번호'} type={'password'} name={'password'} onChangeValue={(v) => console.log(v)} />
          <div className="d-grid gap-2 mx-auto">
            <Button text={'로그인'} color={COLORS.primary} type={'submit'} />
            <Button text={'회원가입'} color={COLORS.primary} type={'button'} onClick={() => console.log('Register')} />
          </div>
        </form>
      </div>
    </div>
  );
};
