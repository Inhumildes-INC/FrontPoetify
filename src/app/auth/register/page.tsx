"use client"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import Style from './Register.module.sass'

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
    const res = await fetch("http://localhost:4000/usuario/agregar", {
      method: "POST",
      body: JSON.stringify({
        nombre: data.nombre,
        email: data.email,
        password: data.password,
        id_ocupacion: 1,
        id_orientacion: 5,
        id_equipo: 2
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

        <label htmlFor="nombre" className={Style.text}>
          Nombre de usuario*:
        </label>
        <input
          type="text"
          {...register("nombre", {
            required: {
              value: true,
              message: "tu nombre es necesario",
            },
          })}
          className={Style.placeholder}
          placeholder="belleza123"
        />
        {errors.nombre && (
          <span className={Style.error}>
            {errors.nombre.message}
          </span>
        )}

        <label htmlFor="email" className={Style.text}>
          Correo electrónico*:
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

        <label htmlFor="dropdown1" className={Style.text}>
          ¿a qué te dedicas?*:
        </label>
        <select {...register("dropdown1")} className={Style.placeholder}>
          <option value="1">Estudiante</option>
          <option value="2">Docente</option>
          <option value="3">Ama de casa</option>

        </select>

        <label htmlFor="dropdown2" className={Style.text}>
          Selecciona tu orientación sexual*:
        </label>
        <select {...register("dropdown2")} className={Style.placeholder}>
          <option value="Heterosexual">Heterosexual</option>
          <option value="Homosexual">Homosexual</option>
          <option value="Pornosexual">Pornosexual</option>
          <option value="Androginosexual">Androginosexual</option>
          <option value="Antrosexual">Antrosexual</option>
          <option value="Asexual">Asexual</option>
          <option value="Bicurioso">Bicurioso</option>
          <option value="Biflexible">Biflexible</option>
          <option value="Bisexual">Bisexual</option>
          <option value="Demisexual">Demisexual</option>
          <option value="Ginosexual">Ginosexual</option>
          <option value="Grisexual">Grisexual</option>
          <option value="Lithsexual">Lithsexual</option>
          <option value="Monosexual">Monosexual</option>
          <option value="Omnisexual">Omnisexual</option>
          <option value="Pansexual">Pansexual</option>
          <option value="poliamoroso">Poliamoroso</option>
          <option value="Polisexual">Polisexual</option>
          <option value="Queer">Queer</option>
          <option value="Sapiosexual">Sapiosexual</option>
          <option value="Skoliosexual">Skoliosexual</option>
          <option value="Transeróticos">Transeróticos</option>

        </select>

        <label htmlFor="dropdown3" className={Style.text}>
          Selecciona tu equipo de futbol favorito*:
        </label>
        <select {...register("dropdown3")} className={Style.placeholder}>
          <option value="a">FC Barcelona</option>
          <option value="b">Atlético Nacional</option>
        </select>

        <label htmlFor="telefomo1" className={Style.text}>
          ingresa tu numero de contacto*:
        </label>
        <input
          type="text"
          {...register("telefono1", {
            required: {
              value: true,
              message: "queremos poder contactarte",
            },
          })}
          className={Style.placeholder}
          placeholder="3124560067"
        />
        <label htmlFor="telefono2" className={Style.text}>
          otro telefono, por si algo:
        </label>
        <input
          type="text"
          {...register("telefono2", {
            required: {
              value: true,
              message: "",
            },
          })}
          className={Style.placeholder}
          placeholder="este no es obligatorio"
        />

        <label htmlFor="password" className={Style.text}>
          Contraseña*:
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
          Confirmar contraseña*:
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
