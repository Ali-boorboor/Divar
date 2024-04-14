export const en = 1;
export const fa = 0;

export const texts = {
  formPlaceholders: {
    password: ["رمز عبور", "password"],
    phone: ["شماره موبایل", "phone number"],
    button: ["تایید", "submit"],
    formSwalErrorModal: ["خطایی رخ داده", "An error occurred"],
    FormFirstText: ["شمارهٔ موبایل خود را وارد کنید", "Enter your phone number"],
  },
  login: {
    loginFormTitle: ["ورود به حساب کاربری", "Login to account"],
    loginFormSecondText: ["قبل از ثبت آگهی، لطفاً وارد حساب خود شوید.", "Before posting an ad, please login to your account."],
    loginFormButton: ["صفحه ثبت نام", "Registration page"],
    loginPageTitle: ["صفحه ورود دیوار", "Divar login page"],
  },
  signup: {
    signupFormTitle: ["ثبت نام در دیوار", "Signup to Divar"],
    signupFormSecondText: ["قبل از ثبت آگهی، لطفاً ثبت نام کنید", "Before posting an ad, please Signup to Divar."],
    signupFormButton: ["صفحه ورود دیوار", "Login page"],
    signupPageTitle: ["صفحه ثبت نام دیوار", "Divar signup page"],
  }
};

export function tr(lang: number, text: string[]) {
  return text[lang];
}
