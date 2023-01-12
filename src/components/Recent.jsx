import React from "react";
export const Recent = ({ data, shortLink }) => {
  const styles = {
    container: {
      width: "291px",
      height: "146px",
      marginTop: "80px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    content: {
      width: "264px",
      height: "49px",
    },
    key: {
      fontFamily: "Ubuntu",
      fontWeight: "400",
      filter: "opacity(30%)",
      fontSize: "16px",
      marginBottom: "10px",
    },
    value: {
      fontFamily: "Ubuntu",
      fontWeight: "400",
      fontSize: "20px",
    },
    copyContainer: {
      width: "100%",
      display: "flex",
    },
    copyButton: {
      border: "none",
      backgroundColor: "transparent",
      fontFamily: "Ubuntu",
      fontWeight: "400",
      fontSize: "18px",
      color: "#02B589",
      textDecoration: "underline",
      marginLeft: "10px",
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.key}>Өгөгдсөн холбоос:</div>
        <div style={styles.value}>{data}</div>
      </div>
      <div style={styles.content}>
        <div style={styles.key}>Богино холбоос:</div>
        <div style={styles.copyContainer}>
          <div style={styles.value}>{`localhost:3000/${shortLink}`}</div>
          <button style={styles.copyButton}>Хуулж авах</button>
        </div>
      </div>
    </div>
  );
};
