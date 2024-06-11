"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import  Style  from './Register.module.sass';

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      return alert("Passwords do not match");
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/api/auth/signin");
    }
  });

  console.log(errors);

  return (
    <div className={Style.container}>
      <form onSubmit={onSubmit} className={Style.formElement}>
        <h1 className={Style.element}>Registrate</h1>

        <label htmlFor="username" className={Style.text}>
          Nombre de usuario:
        </label>
        <input
          type="text"
          {...register("username", {
            required: {
              value: true,
              message: "tu nombre es necesario",
            },
          })}
          className={Style.placeholder}
          placeholder="belleza123"
        />

        {errors.username && (
          <span className={Style.error}>
            {errors.username.message}
          </span>
        )}

        <label htmlFor="email" className={Style.text}>
          Correo electrónico:
        </label>
        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "el correo es necesario",
            },
          })}
          className={Style.placeholder}
          placeholder="tornillo@email.com"
        />
        {errors.email && (
          <span className={Style.error}>{errors.email.message}</span>
        )}

        <label htmlFor="password" className={Style.text}>
          Contraseña:
        </label>
        <input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "¿estás seguro?",
            },
          })}
          className={Style.placeholder}
          placeholder="********"
        />
        {errors.password && (
          <span className={Style.error}>
            {errors.password.message}
          </span>
        )}

        <label htmlFor="confirmPassword" className={Style.text}>
          Confirmar contraseña:
        </label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "si está ahí es por algo",
            },
          })}
          className={Style.placeholder}
          placeholder="lo mismo de arriba"
        />
        {errors.confirmPassword && (
          <span className={Style.error}>
            {errors.confirmPassword.message}
          </span>
        )}

        <button className={Style.button}>
          Registrarme
        </button>
      </form>
    </div>
  );
}
export default RegisterPage;