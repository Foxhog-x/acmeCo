import styles from "./Profile.module.css";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
export const Profilepage = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  type Inputs = {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    image: File | null;
  };
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    fetch("http://localhost:8000/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        form_obj: data,
      }),
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setValue("image", file);
  };
  const handleButtonClick = () => {
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    fileInput.click();
  };
  return (
    <>
      <div className={styles.profile_container}>
        <div className={styles.profile_heading}>
          <h2>My Profile</h2>
        </div>
        <div style={{ marginBottom: 35 }}>
          <button
            onClick={handleButtonClick}
            style={{
              padding: "1rem",
              maxWidth: 275,
              minWidth: 100,
              borderRadius: "1rem",
              display: "flex",
              alignContent: "center",
              gap: 6,
            }}
          >
            <PhotoCameraIcon />
            Add Profile Photo here
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              {...register("image")}
              onChange={(e) => handleFileChange(e)}
            />
          </button>
        </div>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 35,
            padding: 5,
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.fields}>
            <div className={styles.label_filed}>
              <label htmlFor="">FirstName</label>
              <input
                type="text"
                {...register("firstName", { required: true, minLength: 2 })}
              />
              {errors.firstName && (
                <p style={{ color: "#ef9a9a" }}>
                  {errors.firstName.message} min length is required
                </p>
              )}
            </div>
            <div className={styles.label_filed}>
              <label htmlFor="">LastName</label>
              <input
                type="text"
                {...register("lastName", { required: true, minLength: 2 })}
              />
              {errors.lastName && (
                <p style={{ color: "#ef9a9a" }}>
                  {errors.lastName.message} min length is required
                </p>
              )}
            </div>
          </div>
          <div className={styles.label_email}>
            <label>Email</label>
            <input
              type="text"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />

            {errors.email && (
              <p style={{ color: "#ef9a9a" }}>{errors.email.message}</p>
            )}
          </div>
          <div className={styles.address}>
            <label>Address</label>
            <textarea
              style={{ maxWidth: 510 }}
              rows={7}
              {...register("address")}
            ></textarea>
          </div>
          <div className={styles.submit_container}>
            <>
              <button
                style={{
                  padding: 12,
                  minWidth: 100,
                  borderRadius: "1rem",
                }}
              >
                Reset
              </button>
            </>
            <>
              <button
                style={{
                  padding: 12,
                  minWidth: 100,
                  borderRadius: "1rem",
                  backgroundColor: "#535bf2",
                }}
                type="submit"
              >
                Submit
              </button>
            </>
          </div>
        </form>
      </div>
    </>
  );
};
