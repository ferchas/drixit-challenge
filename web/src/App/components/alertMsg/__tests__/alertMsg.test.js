import React from 'react';
import { render, screen } from '@testing-library/react';
import AlerMsg from '../';

describe('Alet mensajes Componnet', () => {
  test('Render Seccess', () => {
    const msg = 'alertSuccess';
    render(<AlerMsg msg={msg} />);

    expect(screen.getByText(msg)).toBeInTheDocument();
  });

  test('Render Danger', () => {
    const msg = 'alertDanger';
    render(<AlerMsg msg={msg}  typeMsg="danger"/>);

    expect(screen.getByText(msg)).toBeInTheDocument();
  });
});