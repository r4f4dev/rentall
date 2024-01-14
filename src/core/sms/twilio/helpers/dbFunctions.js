import { UserProfile, Country, User, Codes } from "../../../../data/models";

export async function updateVerificationCode(verificationCode, phone) {
  // const verification = await UserProfile.update({
  //     verificationCode,
  //     codeUpdatedAt: new Date()
  // },
  //     {
  //         where: {
  //             phoneNumber
  //         }
  //     });
  // if (verification) {
  //     return {
  //         status: 'success'
  //     };
  // } else {
  //     return {
  //         status: 'failed'
  //     }
  // }
  const verification = await User.update(
    {
      verificationCode,
      codeUpdatedAt: new Date(),
    },
    {
      where: {
        phone,
      },
    }
  );
  await Codes.insertOrUpdate({
    phone: phone,
    code: verificationCode,
    createdAt: new Date(),
  });
  if (verification) {
    return {
      status: "success",
    };
  } else {
    return {
      status: "failed",
    };
  }
}

export async function getCountryCode(dialCode) {
  const country = await Country.findOne({
    where: {
      dialCode,
    },
    raw: true,
  });

  if (country) {
    return country.countryCode;
  } else {
    return "US";
  }
}
