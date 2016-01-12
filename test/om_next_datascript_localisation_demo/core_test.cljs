(ns om-next-datascript-localisation-demo.core-test
  (:require
    [cljs.test :refer-macros [deftest is testing]]
    [om-next-datascript-localisation-demo.utils.interpolator :refer [interp]]))

(deftest interpolation
  (testing "interp"
    (is (= "" (interp "" {})))
    (is (= "abc" (interp "abc" {})))
    (is (= "abc {foo}" (interp "abc {foo}" {})))
    (is (= "abc" (interp "abc" {:foo "FOO"})))
    (is (= "abc FOO" (interp "abc {foo}" {:foo "FOO"})))
    (is (= "abc {bar}" (interp "abc {bar}" {:foo "FOO"})))
    (is (= "abc FOO BAR" (interp "abc {foo} {bar}" {:foo "FOO" :bar "BAR"})))
    (is (= "abc FOO {jeep} BAR" (interp "abc {foo} {jeep} {bar}" {:foo "FOO" :bar "BAR"})))
    (is (= "abc FOO JEEP BAR" (interp "abc {foo} {jeep} {bar}" {:foo "FOO" :bar "BAR" :jeep "JEEP"})))
    (is (= "2016 1 11" (interp "{year} {month} {day}" {:year 2016 :month 1 :day 11})))
    (is (= "2016 January Monday" (interp "{year} {month} {day}" {:year 2016 :month "January" :day "Monday"})))
    (is (= "Monday, 11 January 2016" (interp "{day}, {date} {month} {year}" {:year 2016 :date 11 :month "January" :day "Monday"})))
    (is (= "2016年1月11日，周一" (interp "{year}年{month}月{date}日，{day}" {:year 2016 :date 11 :month 1 :day "周一"})))
    (is (= "Lundi, 11 Janvier 2016" (interp "{day}, {date} {month} {year}" {:year 2016 :date 11 :month "Janvier" :day "Lundi"})))))
