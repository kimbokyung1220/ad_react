import React, { useState } from 'react';
import { Modal } from 'antd';


export const successAlert = (msg: string) => {
    Modal.success({
        content: (msg), onOk() {},
    });
}

export const errorAlert = (msg: string) => {
    Modal.error({
        content: (msg), onOk() {},
    });
};

export const warningAlert = (msg: string) => {
    Modal.warning({
        content: (msg), onOk() {},
      });
};
