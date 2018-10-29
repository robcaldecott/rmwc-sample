import React from "react";
import { Button } from "@rmwc/button";
import styles from "./DangerButton.module.scss";

const DangerButton = props => (
  <Button className={styles.danger} raised>
    {props.children}
  </Button>
);

export { DangerButton };
