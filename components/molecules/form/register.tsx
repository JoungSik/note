import { FormikHelpers, useFormik } from 'formik';

import { User } from '../../../types/user';

import { EditText } from '../../atoms/editText';
import { Button, COLORS } from '../../atoms/button';

export const RegisterForm = () => {
  const formik = useFormik<User>({
    initialValues: new User(),
    onSubmit: (values: User, formikHelpers: FormikHelpers<User>) => {
      console.log(values);
    }
  });

  const onChangeValue = (key: string, value: string) => formik.setFieldValue(key, value);

  return (
    <div className={'card'}>
      <div className="card-body">
        <h5 className="card-title">회원가입</h5>
        <form onSubmit={formik.handleSubmit}>
          <EditText title={'이메일'} type={'email'} name={'email'}
                    defaultValue={formik.values.email}
                    onChangeValue={(v) => onChangeValue('email', v)} />
          <EditText title={'비밀번호'} type={'password'} name={'password'}
                    defaultValue={formik.values.password}
                    onChangeValue={(v) => onChangeValue('password', v)} />
          <EditText title={'비밀번호 재입력'} type={'password'} name={'confirm_password'}
                    defaultValue={formik.values.confirm_password}
                    onChangeValue={(v) => onChangeValue('confirm_password', v)} />
          <div className="d-grid gap-2 mx-auto">
            <Button text={'회원가입'} color={COLORS.primary} type={'submit'} />
          </div>
        </form>
      </div>
    </div>
  );
};
