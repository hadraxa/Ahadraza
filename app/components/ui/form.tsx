import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./form.module.css";

function Form() {
  const successMessage: React.CSSProperties = {
    color: "#35ff00",
    fontSize: "13px",
  };
  const errorMessage: React.CSSProperties = {
    color: "rgb(238 43 43)",
    fontSize: "13px",
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Replace these with your EmailJS service details
      const serviceId = "service_t51zdqg";
      const templateId = "template_otj8qrd";
      const userId = "ahv8vhK8YwP2DytHn";

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        userId
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="form-section" className={styles.formMainContainer}>
      <div className={styles.formTexts}>
        <h1 className={styles.formTitle}>Get In Touch</h1>
        <p className={styles.formDescription}>
          Have a project in mind? Let’s make it happen—get in touch today!
        </p>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.wrapper}>
          <div className={styles.flipCard__inner}>
            <div className={styles.flipCard__front}>
              <div className={styles.title}>Contact Us</div>
              <form onSubmit={handleSubmit} className={styles.flipCard__form}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Name"
                  className={styles.flipCard__input}
                  disabled={isSubmitting}
                />

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  className={styles.flipCard__input}
                  disabled={isSubmitting}
                />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Message"
                  className={styles.flipCard__input_textarea}
                  disabled={isSubmitting}
                ></textarea>

                <button
                  type="submit"
                  className={styles.flipCard__btn}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>

                {submitStatus === "success" && (
                  <p style={successMessage}>Message sent successfully!</p>
                )}
                {submitStatus === "error" && (
                  <p style={errorMessage}>
                    Failed to send message. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
