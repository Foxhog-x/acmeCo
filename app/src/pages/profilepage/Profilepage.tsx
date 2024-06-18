import styles from "./Profile.module.css";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { Dispatch, SetStateAction, useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
interface FileDetails {
  name: string;
  size: number;
}

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  image: File | null;
};
type IProps = {
  setOpen: Dispatch<SetStateAction<boolean | object>>;
};
export const Profilepage = ({ setOpen }: IProps) => {
  const [fileDetails, setFileDetails] = useState<FileDetails>();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("address", data.address);
    if (data.image) {
      formData.append("image", data.image);
    }
    fetch("http://localhost:8000/profile", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setOpen((prev) => {
          if (typeof prev !== "object" || prev === null) {
            return prev;
          }
          return {
            ...prev,
            bool: true,
            message: "successfully Saved",
          };
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log(data);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setFileDetails((prev) => {
        return { ...prev, name: file?.name, size: file.size / (1024 * 1024) };
      });
    }
    console.log(file);
    setValue("image", file);
  };
  const handleButtonClick = () => {
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    fileInput.click();
  };

  const formatToTwoDecimalPlaces = (num: number): number => {
    const size = Math.floor(num * 100) / 100;
    return size;
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
          <p style={{ display: "flex", gap: 14 }}>
            <span>{fileDetails?.name}</span>
            <span>
              {fileDetails && formatToTwoDecimalPlaces(fileDetails?.size)}
            </span>
          </p>
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
