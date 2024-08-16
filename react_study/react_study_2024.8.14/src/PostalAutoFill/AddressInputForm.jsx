import React, { useState, useEffect } from "react";

const joinWithoutNullOrUndefined = (...parts) =>
  parts.filter((part) => part != null).join("");

const normalizeAddress = ({
  prefecture_kana,
  city_kana,
  suburb_kana,
  prefecture,
  city,
  suburb,
  street_address,
  office,
  office_kana,
  office_roman,
  prefecture_roman,
  city_roman,
  suburb_roman,
}) => {
  return {
    kana: joinWithoutNullOrUndefined(
      prefecture_kana,
      city_kana,
      suburb_kana,
      street_address,
      office_kana
    ),
    kanji: joinWithoutNullOrUndefined(
      prefecture,
      city,
      suburb,
      street_address,
      office
    ),
    roman: joinWithoutNullOrUndefined(
      prefecture_roman,
      city_roman,
      suburb_roman,
      street_address,
      office_roman
    ),
  };
};

const getAddressFromPostCode = (postcode) => {
  const apiUrl = `https://postcode.teraren.com/postcodes/${postcode}.json`;

  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      return response.json();
    })
    .then((address) => normalizeAddress(address));
};

const AddressInputForm = () => {
  const [postcode, setPostcode] = useState("");
  const [address, setAddress] = useState({ kana: "", kanji: "", roman: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    if (postcode.length === 7) {
      getAddressFromPostCode(postcode)
      .then((normalizeAddress) => {
        setAddress(normalizeAddress);
        setError("");
      })
      .catch((err) => {
        setError("住所情報を取得できませんでした。");
        console.error(err);
      });
    }
  }, [postcode]);

  return (
    <div>
      <div>
        <label>郵便番号</label>
        <input 
          type="text"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          placeholder="1234567"
          />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label>住所(カナ)</label>
        <input type="text" value={address.kana} readOnly />
      </div>
      <div>
        <label>住所(漢字)</label>
        <input type="text" value={address.kanji} readOnly />
      </div>
      <div>
        <label>住所(ローマ字)</label>
        <input type="text" value={address.roman} readOnly />
      </div>
    </div>
  );
};

export default AddressInputForm;