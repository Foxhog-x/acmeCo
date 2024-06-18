import { IconButton } from "@mui/material";
import styles from "./Profile.module.css";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
export const Profilepage = () => {
  return (
    <>
      <div className={styles.profile_container}>
        <div className={styles.profile_heading}>
          <h2>My Profile</h2>
        </div>
        <div style={{ marginBottom: 35 }}>
          <button
            style={{
              padding: "1rem",
              maxWidth: 275,
              minWidth: 100,
              borderRadius: "1rem",
            }}
          >
            <IconButton>
              <PhotoCameraIcon />
            </IconButton>{" "}
            Add Profile Photo here
          </button>
        </div>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 35,
            padding: 5,
          }}
        >
          <div className={styles.fields}>
            <div className={styles.label_filed}>
              <label htmlFor="">FirstName</label>
              <input type="text" name="firstName" />
            </div>
            <div className={styles.label_filed}>
              <label htmlFor="">LastName</label>
              <input type="text" name="lastName" />
            </div>
          </div>
          <div className={styles.label_email}>
            <label>Email</label>
            <input type="text" name="email" />
          </div>
          <div className={styles.address}>
            <label>Address</label>
            <textarea
              style={{ maxWidth: 510 }}
              name="address"
              rows={7}
            ></textarea>
          </div>
          <div className={styles.submit_container}>
            <button
              style={{
                padding: 12,
                minWidth: 100,
                borderRadius: "1rem",
              }}
            >
              Reset
            </button>
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
          </div>
        </form>
      </div>
    </>
  );
};
